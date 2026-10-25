import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Contoh data manga (bisa kamu ganti nanti dengan fetch ke API manga lain)
  const mangaList = [
    { id: 1, title: "Solo Leveling", genre: "Action, Fantasy" },
    { id: 2, title: "One Piece", genre: "Action, Adventure" },
    { id: 3, title: "Frieren: Beyond Journey's End", genre: "Fantasy, Adventure" }
  ];

  // Kirim data dalam format JSON ke website
  return res.status(200).json(mangaList);
}
