'use strict';

/**
 * Module dependencies.
 */

let userpilotNodeScript;
let initializedUserpilot = 0;

/**
 * Initialize.
 *
 * http://help.userpilot.com/
 *
 * @api public
 */

initialize = (appToken, data) => {
  if (appToken) {
    !initializedUserpilot && loadNodeScript(appToken, data);
    initializedUserpilot = 1;
  }
}

/**
 * Loaded?
 *
 * @api private
 * @return {boolean}
 */

loaded = () => {
  return typeof window.userpilot !== 'undefined';
}

/**
 * Load the Userpilot library.
 *
 * @api private
 * @param {Function} callback
 */

loadNodeScript = (url) => {
  userpilotNodeScript = document.createElement('script');
  userpilotNodeScript.setAttribute('src', url);
  document.getElementsByTagName('head')[0].appendChild(userpilotNodeScript);
}

load = (token, settings) => {
    if (typeof window === "undefined") return;
    if (!settings) {
      settings = {};
    }
    settings.version = settings.version || 'v0';
    settings.endpoint = settings.endpoint || 'api.userpilot.io/socket/';
    settings.token = token;
    window.userpilotSettings = settings;
    
    let shim = settings.domain ? `//${settings.domain}/sdk/latest.js` : `//js.userpilot.io/sdk/latest.js`;
  
    loadNodeScript(shim);
};

/**
 * reload.
 *
 * https://docs.userpilot.com/article/59-installation-guide-for-single-page-applications-spas
 *
 */

reload = (url) => {
  if (window.userpilot) {
    window.userpilot.reload(url);
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.reload(url);
      }
    });
  }
}

/**
 * suppress.
 *
 * Prevents Userpilot from loading content
 *
 */

suppress = () => {
  if (window.userpilot) {
    window.userpilot.suppress();
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.suppress();
      }
    });
  }
}

/**
 * Identify.
 *
 * https://docs.userpilot.com/article/23-identify-users-track-custom-events
 *
 */

identify = (userId, identify) => {
  if (identify) {
    if (identify.createdAt) {
      identify.created_at = identify.createdAt;
      delete identify.createdAt;
    }
  }
  if (window.userpilot) {
    window.userpilot.identify(userId, identify);
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.identify(userId, identify);
      }
    });
  }
}

/**
 * Anonymous.
 *
 * https://docs.userpilot.com/article/48-trigger-an-experience-anonymously
 *
 */

anonymous = () => {
  if (window.userpilot) {
    window.userpilot.anonymous();
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.anonymous();
      }
    });
  }
}

/**
 * Trigger.
 *
 * https://docs.userpilot.com/article/50-trigger-an-experience-manually-through-a-script
 *
 */

trigger = (token) => {
  if (window.userpilot) {
    window.userpilot.trigger(token);
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.trigger(token);
      }
    });
  }
}

/**
 * On.
 *
 * https://docs.userpilot.com/article/61-javascript-api
 *
 */

on = (event, callback) => {
  if (window.userpilot) {
    window.userpilot.on(event, callback);
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.on(event, callback);
      }
    });
  }
}

/**
 * Off.
 *
 * https://docs.userpilot.com/article/61-javascript-api
 *
 */

off = (event) => {
  if (window.userpilot) {
    window.userpilot.off(event);
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.off(event);
      }
    });
  }
}

/**
 * Once.
 *
 * https://docs.userpilot.com/article/61-javascript-api
 *
 */

once = (event, callback) => {
  if (window.userpilot) {
    window.userpilot.once(event, callback);
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.once(event, callback);
      }
    });
  }
}

/**
 * Track.
 *
 * https://docs.userpilot.com/article/23-identify-users-track-custom-events
 *
 */

track = (event, meta) => {
  if (window.userpilot) {
    window.userpilot.track(event, meta);
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.track(event, meta);
      }
    });
  }
}

next = () => {
  if (window.userpilot) {
    window.userpilot.next();
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.next();
      }
    });
  }
}

end = (type) => {
  if (window.userpilot) {
    window.userpilot.end(type);
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.end(type);
      }
    });
  }
}

/**
 * Reset.
 *
 * https://docs.userpilot.com/article/67-reset-experiences-seen-for-a-user
 *
 **/
reset = () => {
  if (window.userpilot) {
    window.userpilot.reset();
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.reset();
      }
    });
  }
}
/**
 *
 * Clean.
 *
 * Clear cached data from Userpilot
 *
 **/

clean = () => {
  if (window.userpilot) {
    window.userpilot.clean();
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.clean();
      }
    });
  }
}

/**
 *
 * Destroy.
 *
 * Completely remove Userpilot data/patterns from the page
 *
 **/

destroy = () => {
  if (window.userpilot) {
    window.userpilot.destroy();
  } else if (typeof userpilotNodeScript !== 'undefined') {
    userpilotNodeScript.addEventListener('load', () => {
      if (window.userpilot) {
        window.userpilot.destroy();
      }
    });
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    initialize,
    loaded,
    load,
    reload,
    suppress,
    identify,
    anonymous,
    trigger,
    on,
    off,
    once,
    track,
    next,
    end,
    reset,
    clean,
    destroy,
  };
} else {
  window.Userpilot = {
    initialize,
    loaded,
    load,
    reload,
    suppress,
    identify,
    anonymous,
    trigger,
    on,
    off,
    once,
    track,
    next,
    end,
    reset,
    clean,
    destroy,
  };
}
