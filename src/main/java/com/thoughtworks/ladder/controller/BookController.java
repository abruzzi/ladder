package com.thoughtworks.ladder.controller;

import com.thoughtworks.ladder.model.Book;
import com.thoughtworks.ladder.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/books")
public class BookController {
    private BookRepository bookRepository;

    @Autowired
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Book> findAll() {
        return bookRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Book create(@RequestBody Book book) {
        return bookRepository.save(book);
    }
}
