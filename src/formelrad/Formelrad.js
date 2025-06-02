import { useState } from "react";
import '../css/mvp.css';
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: "",
        p: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("calculate");

        const { u, i, r, p } = values;

        if (i === "" && r === "") {
            /*calculate i and r */
            setValues(values => ({
                ...values,
                i: values.p / values.u,
                r: (values.u * values.u) / values.p
            }));
        } else if (i === "" && p === "") {
            /*calculate i and p */
            setValues(values => ({
                ...values,
                i: values.u / values.r,
                p: (values.u * values.u) / values.r
            }));
        } else if (r === "" && p === "") {
            /*calculate r and p */
            setValues(values => ({
                ...values,
                r: values.u / values.i,
                p: values.u * values.i
            }));
        } else if (u === "" && i === "") {
            /*calculate u and i */
            setValues(values => ({
                ...values,
                u: Math.sqrt(values.p * values.r),
                i: Math.sqrt(values.p / values.r)
            }));
        } else if (u === "" && r === "") {
            /*calculate u and r */
            setValues(values => ({
                ...values,
                u: values.p / values.i,
                r: values.p / (values.i * values.i)
            }));
        } else if (u === "" && p === "") {
            /*calculate u and p */
            setValues(values => ({
                ...values,
                u: values.i * values.r,
                p: values.i * values.i * values.r
            }));
        }
    };

    return (
        <>
            <section>
                <header>
                    <h2>Formelrad</h2>
                    <img src={formelrad} width="200" alt="Formelrad" />
                </header>
                <form onSubmit={handleSubmit}>
                    <InputField
                        color={"black"}
                        value={values.u}
                        label="Spannung"
                        handleChange={e =>
                            setValues(values => ({ ...values, u: e.target.value }))
                        }
                    />
                    <InputField
                        color={"black"}
                        value={values.i}
                        label="Stromstärke"
                        handleChange={e =>
                            setValues(values => ({ ...values, i: e.target.value }))
                        }
                    />
                    <InputField
                        color={"black"}
                        value={values.r}
                        label="Widerstand"
                        handleChange={e =>
                            setValues(values => ({ ...values, r: e.target.value }))
                        }
                    />
                    <InputField
                        color={"black"}
                        value={values.p}
                        label="Leistung"
                        handleChange={e =>
                            setValues(values => ({ ...values, p: e.target.value }))
                        }
                    />
                    <button type="submit">Calculate</button>
                </form>
            </section>
        </>
    );
}
