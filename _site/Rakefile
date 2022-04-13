def execute(command)
  system "#{command}"
end

desc 'Jekyll Serve'
task :serve do
  execute("bundle exec jekyll serve --trace --livereload --config _config.yml,_config_development.yml")
end
