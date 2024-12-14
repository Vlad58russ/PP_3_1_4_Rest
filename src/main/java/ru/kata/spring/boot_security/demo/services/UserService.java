package ru.kata.spring.boot_security.demo.services;

import ru.kata.spring.boot_security.demo.models.User;

import java.util.List;

public interface UserService {

    User findUserById(Long id);

    List<User> allUsers();

    void addUser(User user);

    void updateUser(User user);

    void deleteUser(Long id);

    User getUserByEmail(String email);

}
