/*
  Warnings:

  - Added the required column `professional` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `phone` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "professional" BOOLEAN NOT NULL,
ALTER COLUMN "phone" SET NOT NULL;
