/*
  Warnings:

  - Added the required column `itemCount` to the `Basket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Basket" ADD COLUMN     "itemCount" INTEGER NOT NULL;
