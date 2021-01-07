function ToursForm () {
    return (
        <section className="section-form-tours">
            <form className="forms" action="/">
                
                <div className="forms__form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="forms__form__field"/>
                </div>

                <div className="forms__form">
                    <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="forms__form__field"/>
                </div>

                <div className="forms__form">
                    <label htmlFor="message">Message</label>
                <input type="text" id="message" name="message" className="forms__form__field"/>
                </div>
            </form>
        </section>
    )
}
export default ToursForm;