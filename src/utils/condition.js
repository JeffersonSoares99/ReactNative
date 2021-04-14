export function condition(condition) {
    switch (condition) {
        case 'storm':
            return icon = {
                name: 'thunderstorm-outline',
                color: '#00789e'
            };
            break;
        case 'snow':
            return icon = {
                name: 'snow',
                color: '#1ec9ff'
            };
            break;
        case 'hail':
            return icon = {
                name: 'thunderstorm-outline',
                color: '#00789e'
            };
            break;

        case 'rain':
            return icon = {
                name: 'rainy-outline',
                color: '#00789e'
            };
            break;

        case 'fog':
            return icon = {
                name: 'cloud-outline',
                color: '#00789e'
            };
            break;

        case 'clear-day':
            return icon = {
                name: 'sunny-sharp',
                color: '#ffb81e'
            };
            break;

        case 'clear_night':
            return icon = {
                name: 'cloudy-night-outline',
                color: '#00789e'
            };
            break;

        case 'cloud':
            return icon = {
                name: 'cloud-outline',
                color: '#00789e'
            };
            break;

        case 'cloudly_day':
            return icon = {
                name: 'partly-sunny-outline',
                color: '#1ec9ff'
            };
            break;

        case 'cloudly_night':
            return icon = {
                name: 'cloudy-night',
                color: '#00789e'
            };
            break;

        case 'none_day':
            return icon = {
                name: 'md-partly-sunny-outline',
                color: '#ffb81e'
            };
            break;

        case 'none_night':
            return icon = {
                name: 'cloudy-night',
                color: '#00789e'
            };
            break;


        default:
            return icon = {
                name: 'cloud-outline',
                color: '#1ec9ff'
            };
            break;
    }
}