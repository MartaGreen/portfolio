var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SERVER_URL = "http://127.0.0.1:3000/";
export const getGarageData = () => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}garage`)).json(); });
export const getCarEngine = (id) => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}engine?id=${id}&status=started`)).json(); });
export const getDriveStatus = (id) => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}engine?id=${id}&status=drive`)).json(); });
export const getStopCar = (id) => __awaiter(void 0, void 0, void 0, function* () { return (yield fetch(`${SERVER_URL}engine?id=${id}&status=stopped`)).json(); });
export const getCreateCar = (name, color) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${SERVER_URL}garage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            color: color,
        }),
    })).json();
});
export const getRemoveCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${SERVER_URL}garage/${id}`, {
        method: "DELETE",
    })).json();
});
export const getUpdateCar = (id, name, color) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${SERVER_URL}garage/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            color: color
        })
    })).json();
});
//# sourceMappingURL=requests.js.map