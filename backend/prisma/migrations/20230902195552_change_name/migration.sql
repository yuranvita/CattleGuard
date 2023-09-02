/*
  Warnings:

  - You are about to drop the column `TIPO_REMERDIO` on the `VACINA` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VACINA" DROP COLUMN "TIPO_REMERDIO",
ADD COLUMN     "TIPO_REMEDIO" "TIPO_REMEDIO" NOT NULL DEFAULT 'REMEDIO';
