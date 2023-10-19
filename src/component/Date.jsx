/**
 * Permet d'afficher un sélecteur de date
 * @param {{name: string, id: number}} props 
 * @returns HTMLElement
 */
export default function Date({name, id}) {
    return (
        <input type="date" name={name} id={id} required />
    )
}