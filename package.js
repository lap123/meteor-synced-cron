Package.describe({
  summary: "Allows you to define and run scheduled jobs across multiple servers.",
  version: "1.2.0",
  name: "lap123:synced-cron",
  git: "https://github.com/lap123/meteor-synced-cron.git"
});

Npm.depends({later: "1.1.6"});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.add_files(['synced-cron-server.js'], "server");
  api.export('SyncedCron', 'server');
});

Package.onTest(function (api) {
  api.use(['lap123:synced-cron', 'tinytest']);
  api.add_files('synced-cron-tests.js', ['server']);
});