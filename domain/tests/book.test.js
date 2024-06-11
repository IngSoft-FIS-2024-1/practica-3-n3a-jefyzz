import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 8000);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('return the correct number of words', () => {
    expect(myBook.getWords()).toBe(8000);
  });

  it('return correct wordsPerPage', () => {
    expect(myBook.wordsPerPage()).toBe(8000 / 350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Libro', 123, 123)).toThrow();
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book('Libro', 'Autor', '141')).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book('Libro', 'Autor', 0)).toThrow();
  });

  it('toString()', () => {
    expect(myBook.toString()).toBe(
      'Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 8000'
    );
  });

  it('check words is a number', () => {
    expect(() => myBook = new Book('Libro', 'Autor', 40, '2520')).toThrow();
  });

  it('check author length is anonimo', () => {
    myBook = new Book('Libro', '', 40, 1000);
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

});
