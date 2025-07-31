<script>
    function mostrarImagem() {
      const select = document.getElementById("sabor");
      const img = document.getElementById("imagemShawarma");
      const valor = select.value;

      if (valor === "picanha") {
        img.src = "https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b0783b6-cfba-42e5-bed7-de3ae16b0177/202307170553_518E_i.jpg";
        img.style.display = "block";
      } else if (valor === "cordeiro") {
        img.src = "https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b0783b6-cfba-42e5-bed7-de3ae16b0177/202501200427_QT1W_i.jpg";
        img.style.display = "block";
      } else if (valor === "file") {
        img.src = "https://static.ifood-static.com.br/image/upload/t_medium/pratos/0b0783b6-cfba-42e5-bed7-de3ae16b0177/202504160414_22LD_i.jpg";
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    }
  </script>
