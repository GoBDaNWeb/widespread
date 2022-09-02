export default function convertCategoryNames(name: string) {
    switch (name) {
        case 'T-Shirts':
            return 'Футболки';
        case 'Hoodies':
            return 'Худи';
        case 'Pants':
            return 'Штаны';
        default:
            return '';
    }
}
