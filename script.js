function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
        }

        function generateQRCode() {
            const contactInfo = `BEGIN:VCARD
VERSION:3.0
FN:Wango Edwin
ORG:Prompt Engineer & Developer
TEL:+1234567890
EMAIL:your.email@example.com
URL:https://linkedin.com/in/yourlinkedin
END:VCARD`;

            // Generate the QR Code
            const qr = new QRCode(document.getElementById("qrcode"), {
                text: contactInfo,
                width: 150,
                height: 150,
                correctLevel: QRCode.CorrectLevel.H
            });

            // Wait for QR Code to be generated before adding image
            setTimeout(() => {
                const qrCanvas = document.querySelector("#qrcode canvas");
                const ctx = qrCanvas.getContext("2d");
                const img = document.getElementById("qrProfile");

                const imgSize = 40; // Image size inside the QR code
                const x = (qrCanvas.width - imgSize) / 2;
                const y = (qrCanvas.height - imgSize) / 2;

                const qrImage = new Image();
                qrImage.src = img.src;
                qrImage.onload = () => {
                    ctx.drawImage(qrImage, x, y, imgSize, imgSize);
                };
            }, 500);
        }

        window.onload = generateQRCode;