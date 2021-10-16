import { StyleSheet } from 'react-native';

import { theme } from '../../global/global';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 55,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        marginBottom: 30,
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.line
    },
    icon: {
        width: 24,
        height: 18
    }
})