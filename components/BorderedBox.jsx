import styles from './BorderedBox.module.css';

export default function BorderedBox(props) {
    return <div className={ styles.box }>
        { props.children }
    </div>;
}