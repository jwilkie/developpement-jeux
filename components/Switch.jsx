import styles from './Switch.module.css'

export default function Switch({checked, onChange}) {
    const handleChange = (event) => {
        onChange(event);
    }

    return <label className={styles.switch}>
        { checked !== undefined && <>
            <input type="checkbox" defaultChecked={checked} onChange={handleChange} />
            <span className={styles.slider}></span>
        </>}
    </label>
}
