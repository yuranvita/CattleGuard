/*
  Warnings:

  - A unique constraint covering the columns `[EMAIL]` on the table `USUARIO` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[TELEFONE]` on the table `USUARIO` will be added. If there are existing duplicate values, this will fail.
  - Made the column `EMAIL` on table `USUARIO` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "USUARIO" ALTER COLUMN "EMAIL" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "USUARIO_EMAIL_key" ON "USUARIO"("EMAIL");

-- CreateIndex
CREATE UNIQUE INDEX "USUARIO_TELEFONE_key" ON "USUARIO"("TELEFONE");
