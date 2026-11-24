
import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DonorVerifyPage() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (token.trim()) {
      navigate(`/donor/trace/${encodeURIComponent(token.trim())}`);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-700">
            LoveAll
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Transparency Ledger
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Verify Your Donation
        </h2>

        <p className="text-gray-500 text-center mt-3 mb-6">
          Enter your public receipt token to trace your donation.
        </p>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="receipt-token"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Public Receipt Token
          </label>

          <input
            id="receipt-token"
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter your receipt token"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg p-3 mt-5"
          >
            Verify & Trace Donation
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
          Secure and transparent donation tracking.
        </p>

      </div>
    </div>
  );
}

