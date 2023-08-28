/*
  Warnings:

  - Added the required column `PROPRIEDADE_ID` to the `ANIMAL` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ANIMAL" ADD COLUMN     "PROPRIEDADE_ID" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "ANIMAL" ADD CONSTRAINT "ANIMAL_PROPRIEDADE_ID_fkey" FOREIGN KEY ("PROPRIEDADE_ID") REFERENCES "PROPRIEDADE"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
