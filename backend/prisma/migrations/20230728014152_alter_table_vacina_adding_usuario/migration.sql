/*
  Warnings:

  - Added the required column `USUARIO_ID` to the `VACINA` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VACINA" ADD COLUMN     "USUARIO_ID" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "VACINA" ADD CONSTRAINT "VACINA_USUARIO_ID_fkey" FOREIGN KEY ("USUARIO_ID") REFERENCES "USUARIO"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
