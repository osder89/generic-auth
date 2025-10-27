package com.odr.model.commons.api;

import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResponseBody<T> {
    String code = "000";
    String message;
    T data;
}
