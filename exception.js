function divide(a, b) {
    try {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Input harus berupa angka.");
      }
  
      if (b === 0) {
        throw new Error("Pembagian dengan nol tidak diperbolehkan.");
      }
  
      return a / b;
    } catch (error) {
      console.error("Kesalahan:", error.message);
      return null;
    }
  }
  
  console.log(divide(10, 2));
  console.log(divide(10, 0));
  console.log(divide(10, 'a'));