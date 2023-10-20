import Gio from 'gi://Gio';


export function check_npm(extensiondir) {
    const file = Gio.File.new_for_path(extensiondir + "/node_modules/sass/sass.js");
    return file.query_exists(null);
}

function check_bin(path) {
    const file = Gio.File.new_for_path(path);
    return file.query_exists(null);
}