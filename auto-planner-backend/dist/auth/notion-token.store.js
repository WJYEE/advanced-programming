"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToken = saveToken;
exports.getToken = getToken;
const notionTokenStore = new Map();
function saveToken(userId, token) {
    notionTokenStore.set(userId, token);
}
function getToken(userId) {
    return notionTokenStore.get(userId);
}
//# sourceMappingURL=notion-token.store.js.map