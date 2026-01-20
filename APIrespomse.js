function getUserName(res) {
    if (res.status === "ok") {
        return res.data.name;
    }
    else {
        return "ERROR: ".concat(res.message);
    }
}
var res = { status: "ok", data: { id: 1, name: "John" } };
console.log(getUserName(res));
