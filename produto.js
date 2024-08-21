import { Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function Produto({ data, onDelete, onSelect, selecionado }) {

    return (
        <Pressable style={[styles.container, selecionado && styles.selecionado]} onPress={onSelect}>
            <Text style={styles.text}>
                {data.quantidade} - {data.nome}
            </Text>
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CECECE",
        padding: 24,
        borderRadius: 5,
        gap: 12,
        flexDirection: "row",
    },
    selecionado: {
        borderColor: "blue", // Cor da borda ao selecionar
        borderWidth: 2, // Espessura da borda ao selecionar
    },
    text: {
        flex: 1,
    },
});