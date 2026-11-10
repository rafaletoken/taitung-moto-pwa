# 台東知本機車旅遊 PWA v1

## GitHub Pages
1. 建立 GitHub repository，例如 `taitung-moto-pwa`
2. 把本資料夾全部上傳到 repository 根目錄
3. Settings → Pages → Deploy from a branch
4. Branch 選 `main`，資料夾選 `/ (root)`
5. 等待部署完成後，用 iPhone Safari 開啟 Pages 網址
6. Safari → 分享 → 加入主畫面

## 本版已完成
- 2026/11/13～11/14 台東知本行程
- DAY 1 / DAY 2 時間軸
- 每個景點 Google Maps 連結
- 機車旅行設定與避開高速／收費／渡船的產品邏輯
- 建議停留時間
- 午餐條件式分流
- 完成節點與進度保存
- 分享網址
- PWA manifest
- Service Worker
- iPhone 主畫面支援
- Open-Meteo 天氣區塊

## 下一版建議
加入 Google Routes API，讓 App 自動計算每一段「機車距離＋預估車程」，並產生真正的 `two-wheeler + avoid highways/tolls/ferries` 路線；Google Maps 仍負責最後的即時導航。
