/**
 * 
 * @param {{name: string, id: number, data: string[]}}
 * @returns 
 */
export default function Selector({name, id, data}) {
    return (
        <select name={name} id={id}>
            {data.map((entry, index) => (
                <option key={index}>{entry.name ? entry.abbreviation+" ("+entry.name+")" : entry}</option>
            ))}
        </select>
    )
}