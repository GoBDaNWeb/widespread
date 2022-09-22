export default function convertCollectionNames(name: string) {
    switch (name) {
        case 'Tops':
            return 'Верх';
        case 'Bottoms':
            return 'Низ';
        case 'Hoodies & Sweatshirts':
            return 'Худи & Свитшоты';
        default:
            return '';
    }
}
