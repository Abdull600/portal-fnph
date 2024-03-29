export const ApplicationForm = () => {
    return (
        <form action="">
            <div class="form_heading">
                <h3>application form</h3>
            </div>
            <div class="bio_container">
                <input type="text" name="first-name" placeholder="First name" class="form_control" />
                <input type="text" name="last-name" placeholder="Last name" class="form_control" />
            </div>
            <div class="email_container">
                <label for="email">email address</label>
                <input type="text" name="email" placeholder="Email address" class="form_control" />
            </div>
            <div class="contact_container">
                <div class="country_container">
                    <div class="btn_options">
                        <label for="country" class="country_options">
                            country
                            <span class="material-symbols-outlined">
                                arrow_drop_down
                            </span>
                        </label>
                    </div>
                </div>
                <div class="phone_container">
                    <div class="btn_options">
                        <label for="phone" class="phone_options">
                            +234
                            <input type="text" name="phone" id="phone" />
                        </label>
                    </div>
                </div>
            </div>
            <div class="age_container">
                <div class="btn_options">
                    <label for="age" class="age_options">age</label>
                    <span class="material-symbols-outlined">
                        arrow_drop_down
                    </span>
                </div>
            </div>
            <div class="gender_container">
                <div class="btn_options">
                    <label for="gender" class="gender_options">gender</label>
                    <span class="material-symbols-outlined">
                        arrow_drop_down
                    </span>
                </div>
            </div>
            <div class="institute_container">
                <label for="institution">previous institution</label>
                <input type="text" name="institution" placeholder="Previous institution" class="form_control" />
            </div>
            <div class="form_btn">
                <button>
                    proceed to payment
                </button>
            </div>
        </form>
    )
}