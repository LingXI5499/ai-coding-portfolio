package com.lingxi.evolution.security;

import com.lingxi.evolution.entity.Account;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public record AccountPrincipal(
        Long id, String username, String password, String role, Integer version, boolean enabled)
        implements UserDetails {
    public static AccountPrincipal from(Account u) {
        return new AccountPrincipal(
                u.getId(),
                u.getUsername(),
                u.getPasswordHash(),
                u.getRole(),
                u.getAuthVersion(),
                "ACTIVE".equals(u.getStatus()));
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + role));
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}
