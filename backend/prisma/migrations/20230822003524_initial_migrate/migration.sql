/*
  Warnings:

  - Added the required column `ENDERECO` to the `PROPRIEDADE` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PROPRIEDADE" ADD COLUMN     "ENDERECO" TEXT NOT NULL;
