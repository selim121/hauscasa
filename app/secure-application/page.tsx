"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { QRCodeCanvas } from "qrcode.react";
import { jsPDF } from "jspdf";
import { toast } from "react-toastify";

export default function SecureApplication() {
  const [statement, setStatement] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [referenceCode, setReferenceCode] = useState("");
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load saved submissions from localStorage
    const savedSubmissions = JSON.parse(localStorage.getItem("submissions") || "[]");
    setSubmissions(savedSubmissions);
    setIsLoading(false);
  }, []);

  const generateAlias = () => {
    if (!statement.trim()) {
      toast.error("Please enter a statement or description.");
      return;
    }

    if (!file) {
      toast.error("Please attach a file before generating a reference code.");
      return;
    }

    const alias = "REF-" + Math.random().toString(36).substring(2, 9).toUpperCase();
    setReferenceCode(alias);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!statement.trim() || !referenceCode) {
      toast.error("Please enter a statement and generate a reference code first.");
      return;
    }

    setIsLoading(true);
    
    // Create submission object
    const submission = {
      id: Date.now(),
      statement,
      referenceCode,
      fileName: file?.name || null,
      timestamp: new Date().toLocaleString(),
    };

    // Save to localStorage
    const updatedSubmissions = [...submissions, submission];
    localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));
    setSubmissions(updatedSubmissions);

    // Reset form
    setStatement("");
    setFile(null);
    setReferenceCode("");
    setIsLoading(false);

    toast.success("Entry submitted successfully!");
  };

  const deleteEntry = (id: number) => {
    const updatedSubmissions = submissions.filter((sub) => sub.id !== id);
    localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));
    setSubmissions(updatedSubmissions);
    toast.success("Entry deleted successfully!");
  };

  const downloadQR = () => {
    if (!referenceCode) return;

    const doc = new jsPDF();
    const qrElement = document.getElementById("qrCanvas");
    if (qrElement) {
      const imgData = (qrElement as HTMLCanvasElement).toDataURL("image/png");
      doc.addImage(imgData, "PNG", 20, 20, 160, 160);
      doc.save(`${referenceCode}_QR.pdf`);
    }
  };

  return (
    <div className="max-w-[846px] mx-auto mt-[85px] flex flex-col rounded-[12px] bg-gradient-to-b from-[#80CFEC3D] to-[#149FD23D] [background-image:linear-gradient(171deg,rgba(128,207,236,0.24)_-10.49%,rgba(20,159,210,0.24)_119.61%)] p-6 md:p-10">
      <div className="max-w-[536px] mx-auto flex flex-col items-center justify-center gap-2 pb-[10px] border-b-[2px] border-b-[#3B82F6] mb-[38px]">
        <h1 className="shrink-0 text-center text-[24px] md:text-[32px] text-[#1D1F2C] font-semibold leading-[160%]">
          Secure Entry System
        </h1>
        <p className="max-w-[300px] mx-auto text-[16px] text-center leading-[160%] font-normal text-[#1D1F2C]">
          Generate and manage secure reference codes
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col items-start gap-2">
            <label className="text-[16px] font-normal text-[#4A4C56]">
              Statement/Description *
            </label>
            <Textarea
              value={statement}
              onChange={(e) => setStatement(e.target.value)}
              className="w-full min-h-[150px] bg-white placeholder:text-[#A5A5AB] placeholder:text-[16px] placeholder:font-normal placeholder:leading-[160%]"
              placeholder="Type your statement or description here..."
              required
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-[16px] font-normal text-[#4A4C56]">
              Attach File *
            </label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              accept=".pdf,.doc,.docx,.txt"
              className="w-full h-14 bg-white border border-gray-300 rounded-[10px] px-4 py-2 file:bg-[#f1f5f9] file:border-0 file:mr-4 file:py-2 file:px-4 file:rounded-md file:text-[12px] file:text-[#A5A5AB] text-[#A5A5AB] text-[12px]"
              required
            />
          </div>
        </div>

        {referenceCode && (
          <div className="p-4 bg-white/5 border border-[#3B82F6]/20 rounded-xl text-center">
            <p className="text-[#4A4C56] text-sm">Your Reference Code</p>
            <p className="text-2xl font-mono font-bold text-[#3B82F6]">{referenceCode}</p>
          </div>
        )}

        <div className="flex gap-4">
          <Button
            type="button"
            onClick={generateAlias}
            className="flex-1 h-14 p-[14px] flex items-center justify-center gap-6 text-[20px] bg-[#3B82F6] cursor-pointer rounded-[10px] leading-[140%] text-[#FEF7F9] font-medium"
          >
            Create Reference
          </Button>
          <Button
            type="submit"
            className="flex-1 h-14 p-[14px] flex items-center justify-center gap-6 text-[20px] bg-[#3B82F6] cursor-pointer rounded-[10px] leading-[140%] text-[#FEF7F9] font-medium"
          >
            Submit Entry
          </Button>
        </div>

        {referenceCode && (
          <div className="bg-white/5 p-6 rounded-xl text-center">
            <QRCodeCanvas
              id="qrCanvas"
              value={referenceCode}
              size={192}
              className="mx-auto"
            />
          </div>
        )}

        {referenceCode && (
          <div className="flex gap-4">
            <Button
              type="button"
              onClick={() => window.print()}
              className="flex-1 h-14 p-[14px] flex items-center justify-center gap-6 text-[20px] border border-[#3B82F6] cursor-pointer rounded-[10px] leading-[140%] text-[#3B82F6] font-medium"
            >
              Export
            </Button>
            <Button
              type="button"
              onClick={downloadQR}
              className="flex-1 h-14 p-[14px] flex items-center justify-center gap-6 text-[20px] border border-[#3B82F6] cursor-pointer rounded-[10px] leading-[140%] text-[#3B82F6] font-medium"
            >
              Download QR
            </Button>
          </div>
        )}
      </form>

      <div className="mt-12">
        <h2 className="text-[24px] text-[#1D1F2C] font-semibold mb-6">📂 Saved Entries</h2>
        <div className="space-y-4">
          {submissions.map((sub) => (
            <div
              key={sub.id}
              className="p-4 bg-white/5 border border-[#3B82F6]/20 rounded-xl"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#4A4C56]">{sub.timestamp}</span>
                <button
                  onClick={() => deleteEntry(sub.id)}
                  className="text-red-500 hover:text-red-600 p-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
              <p className="text-[#3B82F6] font-mono font-semibold mt-2">
                {sub.referenceCode}
              </p>
              <p className="text-[#4A4C56] mt-2">{sub.statement}</p>
              {sub.fileName && (
                <p className="text-xs text-[#4A4C56] mt-2">📎 {sub.fileName}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
