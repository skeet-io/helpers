import 'logger'

class InjectionHelper {
    constructor() {
        this.logger = new Logger();
    }

    applyPatch(script, method, regex, replacer) {
        const newScript = script.replace(regex, replacer);
        if (script === newScript) {
            this.logger.crash(`${method} was not successful`);
        }
        return newScript;
    }
}
