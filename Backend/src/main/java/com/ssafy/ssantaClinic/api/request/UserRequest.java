package com.ssafy.ssantaClinic.api.request;

import lombok.Data;

public class UserRequest {

    @Data
    public static class JoinRequest{
        private int userId;
        private String email;
        private String password;
        private String nickName;
    }
}
