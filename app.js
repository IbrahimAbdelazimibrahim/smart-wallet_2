const PUBLISHABLE_KEY = "sb_publishable_LiWVVRrUHDkEYPW9cOvjVg_ESjcfUG2";
const SUPABASE_URL = "https://zfhexlywylxpsjcskica.supabase.co";
// المتغيرات
const balanceEl = document.getElementById("balance");
const amountInput = document.getElementById("amount-input");
const btnIncome = document.getElementById("btn-income");
const btnExpense = document.getElementById("btn-expense");
const historyList = document.getElementById("history-list");

const supabaseClient = createClient(SUPABASE_URL, PUBLISHABLE_KEY);
