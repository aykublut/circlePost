import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const {
      email,
      username,
      password,
      firstName,
      lastName,
      photo,
      location,
      circleCode,
    } = await request.json();

    // Gerekli alanlar
    if (
      !email ||
      !username ||
      !password ||
      !firstName ||
      !lastName ||
      !circleCode
    ) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format." },
        { status: 400 }
      );
    }

    // Şifre uzunluğu
    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    // Email veya username kontrolü
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with provided email or username already exists." },
        { status: 409 }
      );
    }
    // 1. aşama: .env'deki geçerli kodlarla kontrol
    const validCodes = process.env.CIRCLE_CODES?.split(",") || [];
    if (!validCodes.includes(circleCode)) {
      return NextResponse.json(
        { message: "Invalid circle code." },
        { status: 400 }
      );
    }

    // 2. aşama: daha önce kullanılmış mı
    const existingCode = await prisma.user.findFirst({
      where: { circleCode },
    });

    if (existingCode) {
      return NextResponse.json(
        { message: "This circle code has already been used." },
        { status: 409 }
      );
    }

    // Şifre hash
    const hashedPassword = await bcrypt.hash(password, 12);

    // Kullanıcı oluştur
    const user = await prisma.user.create({
      data: {
        email,
        username,
        firstName,
        lastName,
        photo: photo || "/defaultUser.png",
        location: location || "",
        hashedPassword,
        posts: [],
        selectedMovies: [],
        reviews: [],
        circleCode,
      },
    });

    // hashedPassword dönmeden
    const { hashedPassword: _, ...safeUser } = user;

    return NextResponse.json(safeUser, { status: 201 });
  } catch (error: any) {
    // Konsola tam hatayı logla
    console.error("Register Error:", error);

    // Response’a detaylı mesaj gönder (development için)
    return NextResponse.json(
      {
        message: error?.message || "Something went wrong.",
        stack: error?.stack || null,
      },
      { status: 500 }
    );
  }
}
