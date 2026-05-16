import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setConcurrency('50%');
Config.setChromiumDisableWebSecurity(false);
Config.setChromiumOpenGlRenderer('angle');
Config.setPixelFormat('yuv420p');
