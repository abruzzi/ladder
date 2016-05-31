package com.thoughtworks.ladder.repository;

import com.thoughtworks.ladder.model.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Long>{
}
