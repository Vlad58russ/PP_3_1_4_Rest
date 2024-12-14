package ru.kata.spring.boot_security.demo.services;

import ru.kata.spring.boot_security.demo.models.Role;

import java.util.Collection;

public interface RoleService {

    Collection<Role> allRoles();
}
