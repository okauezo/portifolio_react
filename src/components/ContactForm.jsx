const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(Object.fromEntries(data));
    };

    return (
        <section className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-center max-w-lg mb-8">
                Se você está interessado em discutir oportunidades, colaborar em um projeto, ou simplesmente quer dizer um "Oi", preencha o formulário abaixo!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-md shadow-md max-w-md w-full">
                <input name="name" placeholder="Nome" required className="p-2 border border-gray-300 rounded" />
                <input name="email" type="email" placeholder="Email" required className="p-2 border border-gray-300 rounded" />
                <textarea name="message" placeholder="Mensagem" required className="p-2 border border-gray-300 rounded" />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Enviar</button>
            </form>
        </section>
    );
};

export default ContactForm;
