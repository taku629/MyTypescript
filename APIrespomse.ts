type ApiResponse =
  | { status: "ok"; data: { id: number; name: string } }
  | { status: "error"; message: string };


function getUserName(res: ApiResponse): string{
    if(res.status ==="ok"){
        return res.data.name;
    }else{
        return `ERROR: ${res.message}`;
    }
}
const res: ApiResponse = { status: "ok", data: { id: 1, name: "John" } };
console.log(getUserName(res));
