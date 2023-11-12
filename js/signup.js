import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { PostLogin, ResponseLogin } from "../dashboard/js/controller/controller.js";
import { token, UrlLogin } from '../dashboard/js/template/geocf.js';

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let data = GetDataForm();
        postWithBearer(UrlRegister, token, data, ResponsePost)
    });
});