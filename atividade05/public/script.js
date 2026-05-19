async function carregarFeedbacks() {
    try {
        const resposta = await fetch("/feedbacks/dados");
        const feedbacks = await resposta.json();

        const lista = document.getElementById("lista");
        lista.innerHTML = "";

        if (feedbacks.length === 0) {
            lista.innerHTML = "<p>Nenhum feedback registrado ainda.</p>";
            return;
        }

        feedbacks.forEach((feedback, index) => {
            lista.innerHTML += `
                <div class="feedback-card">
                    <h3>${feedback.nome}</h3>
                    <p>${feedback.comentario}</p>
                    
                    <form action="/feedbacks/remover" method="POST" style="margin: 0;">
                        <input type="hidden" name="index" value="${index}">
                        <button type="submit" ">Remover</button>
                    </form>
                </div>
            `;
        });
    } catch (erro) {
        console.error("Erro ao carregar feedbacks:", erro);
        document.getElementById("lista").innerHTML = "<p>Erro ao carregar a lista.</p>";
    }
}

window.onload = carregarFeedbacks;