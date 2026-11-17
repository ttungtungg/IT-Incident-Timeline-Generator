function detectStatus(text) {

    const t = text.toLowerCase();

    // INCIDENT DETECTED
    if (
        t.includes("tidak bisa") ||
        t.includes("gak bisa") ||
        t.includes("tidak dapat") ||
        t.includes("gagal") ||
        t.includes("error") ||
        t.includes("rusak") ||
        t.includes("down") ||
        t.includes("disconnect") ||
        t.includes("terputus") ||
        t.includes("cannot") ||
        t.includes("failed")
    ) {
        return "🔴 Incident Detected";
    }

    // INITIAL ASSESSMENT
    if (
        t.includes("ticket") ||
        t.includes("laporan") ||
        t.includes("dilaporkan") ||
        t.includes("keluhan") ||
        t.includes("user melapor") ||
        t.includes("complaint")
    ) {
        return "🟡 Initial Assessment";
    }

    // TROUBLESHOOTING
    if (
        t.includes("investigasi") ||
        t.includes("pengecekan") ||
        t.includes("checking") ||
        t.includes("analisa") ||
        t.includes("testing") ||
        t.includes("diagnosa")
    ) {
        return "🟠 Troubleshooting";
    }

    // ROOT CAUSE
    if (
        t.includes("penyebab") ||
        t.includes("root cause") ||
        t.includes("database stop") ||
        t.includes("service mati") ||
        t.includes("database mati") ||
        t.includes("firewall") ||
        t.includes("dns error")
    ) {
        return "🔍 Root Cause Identified";
    }

    // RESOLUTION
    if (
        t.includes("restart") ||
        t.includes("diperbaiki") ||
        t.includes("repair") ||
        t.includes("fixed") ||
        t.includes("restarted") ||
        t.includes("sinkron") ||
        t.includes("recovery")
    ) {
        return "🟢 Resolution Applied";
    }

    // VERIFICATION
    if (
        t.includes("normal") ||
        t.includes("berhasil") ||
        t.includes("verified") ||
        t.includes("sukses") ||
        t.includes("success")
    ) {
        return "✅ Verification Success";
    }

    // CLOSED
    if (
        t.includes("ditutup") ||
        t.includes("closed") ||
        t.includes("completed") ||
        t.includes("selesai")
    ) {
        return "✅ Incident Closed";
    }

    return "⚪ Unknown Status";
}

function generateReport() {

    const input =
        document.getElementById("timeline").value.trim();

    const lines =
        input.split("\n").filter(Boolean);

    let html =
        "<h2>Incident Report</h2>";

    lines.forEach(line => {

        html += `
            <p>
                ${detectStatus(line)}
                - ${line}
            </p>
        `;

    });

    document.getElementById("output").innerHTML =
        html;
}